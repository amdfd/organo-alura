import './Team.css'
import Employee from '../Employee'

const Team = (props) => {
  return (
    (props.employees.length > 0) &&
    <section className='team' style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className='employees'>
        {props.employees.map(employee => <Employee key={employee.name} backgroundColor={props.primaryColor} name={employee.name} job={employee.job} picture={employee.picture} />)}
      </div>
    </section>
  )
}

export default Team