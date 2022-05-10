import React, { useEffect, useState } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent, TextField,
    ToggleButton,
    ToggleButtonGroup
} from '@mui/material';
import { useSelector } from "../../hooks/useSelector";
import { useActions } from '../../hooks/useActions';
import PostPreview from "../post-preview/PostPreview";
import { PostGrade } from '../../enums/PostGrade';
import "./PostsWrapFront.scss";
import Pagination from "@mui/material/Pagination";
import useTranslate from '../../hooks/useTranslate';

import { ReactComponent as LikeIcon } from "../../assets/heart-solid.svg";
import { ReactComponent as DislikeIcon } from "../../assets/heart-broken-solid.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark-solid.svg";

enum Mode {
    LIKED,
    DISLIKED,
    MARKED,
}

const FIRST_PAGE = 1;
const PAGE_SIZE = 4;

const PostsFront: React.FC = () => {
    const { t } = useTranslate();

    const [mode, setMode] = useState(Mode.LIKED);
    const [currentPage, setPage] = useState(FIRST_PAGE);
    const [titleFilter, setTitleFilter] = useState('');
    const [pageSize, setPageSize] = useState(PAGE_SIZE);

    const { fetchAllPosts } = useActions();
    const data = useSelector(state => state.posts.data);
    const loading = useSelector(state  => state.posts.loading);
    const error = useSelector(state  => state.posts.error);

    const grades = useSelector(state => state.posts.grades);
    const marks = useSelector(state => state.posts.bookmarks);

    let filteredData = data
        .filter(item => {
            if (mode === Mode.LIKED) {
                return grades[item.id] === PostGrade.LIKE;
            } else if (mode === Mode.DISLIKED) {
                return grades[item.id] === PostGrade.DISLIKE;
            } if (mode === Mode.MARKED) {
                return marks.includes(item.id);
            }
            return false;
        });

    if (titleFilter !== '') {
        filteredData = filteredData.filter(item => {
            return item.title.toLowerCase().includes(titleFilter);
        });
    }

    const count = filteredData.length;
    const paged = filteredData.slice(pageSize * (currentPage - 1), pageSize * currentPage);

    useEffect(() => {
        fetchAllPosts();
    }, []);

    const handleToggleMode = (_: React.MouseEvent<HTMLElement>, newMode: Mode) => {
        setMode(newMode);
    };

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

    const handleChangePageSize = (event: SelectChangeEvent) => {
        setPageSize(+event.target.value);
    }

    const handleTitleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleFilter(event.target.value);
        setPage(FIRST_PAGE);
    }

    const postComponents = paged.map(post => <PostPreview key={post.id} data={post} />);

    return (
        <div className="posts-filter-front">
            <ToggleButtonGroup
                value={mode}
                exclusive
                onChange={handleToggleMode}
            >
                <ToggleButton value={Mode.LIKED}>
                    <LikeIcon className={`icon ${ mode == Mode.LIKED ? "_liked" : ""}`} />
                    Liked
                </ToggleButton>
                <ToggleButton value={Mode.DISLIKED}>
                    <DislikeIcon className={`icon ${mode == Mode.DISLIKED ? "_disliked" : ""}`} />
                    Disliked
                </ToggleButton>
                <ToggleButton value={Mode.MARKED}>
                    <BookmarkIcon className={`icon ${mode == Mode.MARKED ? "_bookmarked" : ""}`}/>
                    Marked
                </ToggleButton>
            </ToggleButtonGroup>
            <FormControl sx={{ m: 1, minWidth: 130, maxWidth: 250 }}>
                <TextField
                    label={t('filter.lesson.title')}
                    value={titleFilter}
                    onChange={handleTitleFilterChange}
                />
            </FormControl>
            <Pagination
                className='pagination'
                page={currentPage}
                onChange={handleChangePage}
                count={Math.ceil(count / pageSize)}
            />
            <FormControl sx={{ m: 1, minWidth: 130, maxWidth: 130 }}>
                <InputLabel id="demo-simple-select-label">
                    {t("filter.paging.label")}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pageSize.toString()}
                    label="Posts per page"
                    onChange={handleChangePageSize}
                >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>

            </FormControl>
            <div className="posts-wrap">

                { postComponents }
                { loading && "Loading..." }
                { error }
            </div>
        </div>
    )
}

export default PostsFront;