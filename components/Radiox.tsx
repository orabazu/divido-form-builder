import dynamic from 'next/dynamic';

const Radio = dynamic(() =>
  import('@material-ui/core/Radio').finally(() => console.log('loaded radio')),
);
const RadioGroup = dynamic(() => import('@material-ui/core/RadioGroup'));
const FormControlLabel = dynamic(
  () => import('@material-ui/core/FormControlLabel'),
);
// const FormControl = dynamic(() => import('@material-ui/core/FormControl'));
// const FormLabel = dynamic(() => import('@material-ui/core/FormLabel'));

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

const Radiox = () => {
  return (
    <RadioGroup aria-label="gender" name="gender1">
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
      <FormControlLabel
        value="disabled"
        disabled
        control={<Radio />}
        label="(Disabled option)"
      />
    </RadioGroup>
  );
};

export default Radiox;
