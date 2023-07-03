import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { getRecipeByNameThunk } from '../../store/slices/recipes/thunk';
import { AppDispatch } from '../../store/store';

const searchBar = (): JSX.Element => {

    // const [input, setInput] = useState<string>('');
    // const dispatch: AppDispatch = useDispatch()

    // const theAlert = () => {
    //     Swal.fire({
    //         title: 'Error!',
    //         text: 'Incorrect search',
    //         icon: 'error',
    //         imageUrl: 'https://i.ytimg.com/vi/l4FH6NoMkE4/maxresdefault.jpg',
    //         imageWidth: 400,
    //         imageHeight: 200,
    //         confirmButtonText: 'OK'

    //     })
    // }

    // const onSubmit = (e:React.FormEvent) => {
    //     e.preventDefault();
        
    //     if(input === "") theAlert()
       
    //     if(Number(input)) theAlert()
        
    //     dispatch(getRecipeByNameThunk(input))
        
    //     setInput("")
    // };
    
         

    // const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    //     setInput(e.target.value)
    // }

    const [search, setSearch] = useState<string>('')
    const dispatch: AppDispatch = useDispatch()

    const onSubmit = (e: React.FormEvent): void => {
        e.preventDefault()
        if (!search.length) {
            "No Results"
        } else {
            dispatch(getRecipeByNameThunk(search))
        }
        setSearch('')
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value)
    }

  return (
    <div className="{style.container}">
            <form className="{style.formContainer}" onSubmit={onSubmit}>
                <input
                    name='search'
                    placeholder='Search'
                    type='text'
                    value={search}
                    onChange={onInputChange}
                />
                <button className="" type='submit'>
                    <img alt='search-icon' src="{searchIcon}" />
                </button>
            </form>
        </div>
  )
}

export default searchBar