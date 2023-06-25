import PropTypes from "prop-types";
import { Link } from "react-router-dom"
import '../assets/link-button/linkButton.css'

const LinkButton = (props) => {
  const { redirect } = props
  return (
    <div className='button-container'>
      <Link to={redirect} className="button-redirect">Login</Link>
    </div>
  )
}

LinkButton.propTypes = {
  redirect: PropTypes.string.isRequired
}



export default LinkButton