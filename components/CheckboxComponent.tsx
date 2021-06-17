import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type Props = {
  name: string;
  label: string;
  onChange: () => void;
};

const CheckboxComponent: React.FC<Props> = ({ name, onChange, label }) => {
  return (
    <FormControlLabel
      control={<Checkbox onChange={onChange} name={name} color="primary" />}
      label={label}
    />
  );
};

export default CheckboxComponent;
