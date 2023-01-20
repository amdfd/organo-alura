import './Employee.css'

const Employee = ({ name, job, picture, backgroundColor }) => {
  return (
    <div className='employee'>
      <div className='header' style={{ backgroundColor: backgroundColor }}>
        <img src={picture} alt={name} />
      </div>
      <div className='footer-employee'>
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  )
}

export default Employee