import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

type Props = {
  name: string;
  label: string;
  onChange: () => void;
};

const RadioComponent: React.FC<Props> = ({ name, onChange, label }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup aria-label="gender" name={name} onChange={onChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="not_prefered"
          control={<Radio />}
          label="Prefer not to tell"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioComponent;
