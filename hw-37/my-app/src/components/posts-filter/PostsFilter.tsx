import React from 'react';
import Pagination from '@mui/material/Pagination';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import PostsFilterType from '../../types/PostsFilterType'
import "./PostsFilter.scss";

type PropsType = {
    count: number
    filter: PostsFilterType
    setFilter: (callback: (v: PostsFilterType) => PostsFilterType) => void
};

const PostsFilter: React.FC<PropsType> = ({ count, filter, setFilter }) => {

    // useEffect(() => {
    //     console.log(limit);
    // }, [limit]);

    const handleChangeLimit = (event: SelectChangeEvent) => {
        setFilter((prevValue) => ({
            ...prevValue,
            page: 1,
            limit: +event.target.value,
        }));
    }

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        setFilter((prevValue) => ({
            ...prevValue,
            page: value,
        }));
    }

    console.log(filter.limit.toString());
    return (
        <div className='posts-container'>

            <FormControl sx={{ m: 1, minWidth: 130 }}>
                <InputLabel id="demo-simple-select-label">Posts per page</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter.limit.toString()}
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
                page={filter.page}
                onChange={handleChangePage}
                count={Math.ceil(count / filter.limit)}
            />
        </div>
    )
}


export default PostsFilter;