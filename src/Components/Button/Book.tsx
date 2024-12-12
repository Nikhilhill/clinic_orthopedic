import "../../index.css"
interface ButtonProps {
    handleClick: () => void;
  }
export const Button: React.FC<ButtonProps> = ({handleClick}) => {
    return(
        <button className='bookingButton' onClick={handleClick}>Book Your Appointment</button>
    )
}