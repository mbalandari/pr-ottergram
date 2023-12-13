import Barry from '../otters/otter1.jpg';

const Post = () => {
    return (
        <li className='post-component'>
            <button>
                <img src={Barry} alt="Barry" />
                <p>Barry</p>
            </button>
        </li>
    )
}
export default Post