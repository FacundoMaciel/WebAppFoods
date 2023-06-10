

const HeaderComponent = () => {
  return (
    <div className="flex text-start justify-start items-end w-full h-screen bg-[url('src/assets/imageHome2.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex w-[27%] h-[70%] justify-start text-start items-end bg-gradient-to-b from-transparent to-gray-200">
        <h1 className="text-3xl p-4 mt-10 text-gray-600">Soy Henry Food Page
        <p className=" flex text-xl text-gray-600">
          This is your favorite foods page for search an amazing plate or
          Create Your Unique Recipe!
        </p>    
        </h1>
      </div>
    </div>
  );
}

export default HeaderComponent