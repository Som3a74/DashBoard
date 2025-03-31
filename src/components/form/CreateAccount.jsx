import { Link } from 'react-router-dom'

const CreateAccount = ({ title, description, link }) => {
    return (
        <p className="text-center text-base-regular text-dark mt-5">
            {title}{' '}
            <Link className="font-semibold text-[14px] text-primary" to={link}>
                {description}
            </Link>
        </p>
    )
}

export default CreateAccount