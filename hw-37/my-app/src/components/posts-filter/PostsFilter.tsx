import React from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';

import PostsFilterType, { PostsOrder } from './PostsFilterTypes';
import { setLimit, setOrdering, setPage, setAuthor, setLesson } from './PostsFilterActionCreators';

import "./PostsFilter.scss";
import useTranslate from '../../hooks/useTranslate';

type PropsType = {
    count: number
    state: PostsFilterType,
    dispatch: any,
};

const PostsFilter: React.FC<PropsType> = ({ count, state, dispatch }) => {

    const { t } = useTranslate();

    const updateAuthor = (value: string) => {
        dispatch(setAuthor(value));
    }

    const updateLesson = (value: string) => {
        dispatch(setLesson(value));
    }

    const handleLessonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateLesson(event.target.value);
    }

    const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        updateAuthor(event.target.value);
    }

    const handleChangeOrdering = (event: SelectChangeEvent) => {
        console.log('ordering: ' + event.target.value);
        dispatch(setOrdering(event.target.value as PostsOrder));
    }

    const handleChangeLimit = (event: SelectChangeEvent) => {
        dispatch(setLimit(+event.target.value));
    }

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value));
    }

    return (
        <div className='posts-filter'>
            <FormControl sx={{ m: 1, minWidth: 130 }}>
                <TextField
                    label={t('filter.author.label')}
                    value={state.author?.toString()}
                    onChange={handleAuthorChange}
                />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 130 }}>
                <TextField
                    label={t('filter.lesson.label')}
                    value={state.lesson_num?.toString()}
                    onChange={handleLessonChange}
                />
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 130 }}>
                <InputLabel id="demo-simple-select-label">
                    {t("filter.ordering.label")}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.ordering}
                    onChange={handleChangeOrdering}
                    label="Ordering"
                >
                    <MenuItem value={PostsOrder.idAsc}>
                        {t("filter.ordering.id.asc")}
                    </MenuItem>
                    <MenuItem value={PostsOrder.idDesc}>
                        {t("filter.ordering.id.desc")}
                    </MenuItem>
                    <MenuItem value={PostsOrder.dateAsc}>
                        {t("filter.ordering.date.asc")}
                    </MenuItem>
                    <MenuItem value={PostsOrder.dateDesc}>
                        {t("filter.ordering.date.desc")}
                    </MenuItem>
                </Select>
            </FormControl>
            <Box>
                <FormControl sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel id="demo-simple-select-label">
                        {t("filter.paging.label")}
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={state.limit.toString()}
                        label="Posts per page"
                        onChange={handleChangeLimit}
                    >
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={16}>16</MenuItem>
                    </Select>
                    
                </FormControl>
            
                <Pagination 
                    className='pagination'
                    page={state.page}
                    onChange={handleChangePage}
                    count={Math.ceil(count / state.limit)}
                />
            </Box>
        </div>
    )
}


export default PostsFilter;