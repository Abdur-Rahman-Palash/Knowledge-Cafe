import profileImg from'../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center gap-12  border-b-2 border-slate-200 py-2 px-3'>
            <h1 className='text-5xl font-bold'>Knowledge Cafe</h1> 
            <img src={profileImg} alt="" />
        </header>
    );
};

export default Header;