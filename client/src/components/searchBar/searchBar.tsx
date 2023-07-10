import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { getRecipeByNameThunk } from '../../store/slices/recipes/thunk';
import { AppDispatch } from '../../store/store';

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
    <div className="w-auto h-autoflex flex-col max-w-lg mt-20 mx-auto">
            <form onSubmit={onSubmit}>
                <input className="px-8 py-2 rounded-lg border-gray-900 shadow-2xl hover:scale-105 hover:bg-gray-200 transition duration-500 ease-in-out"
                    name='search'
                    placeholder='Search'
                    type='text'
                    value={input}
                    onChange={onChange}
                />
                <button className="border shadow-2xl border-gray-200 rounded-md mx-4 p-2 font-bold hover:bg-gray-200" type='submit'>
                    Search
                </button>
            </form>
        </div>
  )
}

export default searchBar