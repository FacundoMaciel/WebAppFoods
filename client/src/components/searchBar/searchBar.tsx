import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import Swal from "sweetalert2";

import { getRecipeByNameThunk } from '../../store/slices/recipes/thunk';
import { AppDispatch } from '../../store/store';

import { ImSearch } from 'react-icons/im';

const searchBar = (): JSX.Element => {

    const [input, setInput] = useState<string>('');
    const dispatch: AppDispatch = useDispatch()

    const theAlert = () => {
        Swal.fire({
            title: 'Error!',
            text: 'Incorrect search',
            icon: 'error',
            imageUrl: 'https://i.ytimg.com/vi/l4FH6NoMkE4/maxresdefault.jpg',
            imageWidth: 400,
            imageHeight: 200,
            confirmButtonText: 'OK'

        })
    }

    const onSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        
        if(input === "") theAlert()
       
        if(Number(input)) theAlert()
        
        dispatch(getRecipeByNameThunk(input))
        
        setInput("")
    };
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value)
    }

  return (
    <div className="flex justify-center">
            <form onSubmit={onSubmit}>
                <input className="focus:outline-none focus:ring-0 focus:bg-transparent p-1"
                    name='search'
                    placeholder='Search '
                    type='text'
                    value={input}
                    onChange={onChange}
                />
                <button className="ml-1 rounded-md p-1 hover:scale-110 text-gray-700" type='submit'>
                    <ImSearch />
                </button>
            </form>
        </div>
  )
}

export default searchBar