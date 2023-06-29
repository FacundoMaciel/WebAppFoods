

const HeaderComponent = () => {
  return (
    <div className="flex text-start justify-start items-end w-full h-screen bg-[url('src/assets/chef.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="md:hidden flex w-full justify-center">
      <h1 className="text-xl p-4 mt-10 text-[#accc7b] bg-gradient-to-b from-transparent to-[#20222f]">Soy Henry Food Page</h1>
      </div>
      <div className="hidden md:flex w-[27%] h-[70%] justify-start text-start items-end bg-gradient-to-b from-transparent to-[#20222f]">
        <h1 className="text-3xl p-4 mt-10 text-white">Soy Henry Food Page
        <p className="flex text-xl text-white ">
          This is your favorite foods page for search an amazing plate or
          Create Your Unique Recipe!
        </p>    
        </h1>
      </div>
    </div>
  );
}

export default HeaderComponent