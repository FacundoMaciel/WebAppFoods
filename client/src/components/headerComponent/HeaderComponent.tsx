

const HeaderComponent = () => {
  return (
    <div className="flex text-start justify-start w-full h-screen bg-[url('src/assets/imageHome2.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="flex w-[90%] justify-start text-start items-end opacity-0 hover:opacity-95 hover:scale-105 duration-700">
        <h1 className="text-3xl p-10 mt-10 text-black">Soy Henry Foods Page
        <p className=" flex text-2xl text-black">
          This is your favorite foods page for search an amazing plate or
          Create Your Unique Recipe!
        </p>    
        </h1>
      </div>
    </div>
  );
}

export default HeaderComponent