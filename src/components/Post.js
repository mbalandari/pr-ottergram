const Post = ({ image, name }) => {
    const handleClick = (otterName) => {
        return console.log('You clicked ' + otterName)
    }

    const handleEnter = (otterName) => {
        return console.log('Hello, ' + otterName)
    }

    const handleExit = (otterName) => {
        return console.log('Goodbye, ' + otterName)
    }

    return (
        <li className='post-component'>
            <button
                onClick={() => handleClick(name)}
                onMouseEnter={() => handleEnter(name)}
                onMouseLeave={() => handleExit(name)}
            >
                <img src={image} alt={name} />
                <p className="post-name">{name}</p>
            </button>
        </li>
    )
}
export default Post