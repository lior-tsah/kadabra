import { Tab, Tabs } from "@mui/material";

interface CustomTabsProps {
  useStyles?: any;
  value: number;
  handleChange: (a: any, val: number) => void;
  labels: string[] | JSX.Element[];
}
const CustomTabs = (props: CustomTabsProps) => {
  const { useStyles, value, handleChange, labels } = props;

  return (
    <Tabs value={value} onChange={handleChange} sx={useStyles}>
      {labels.map((label, i) => (
        <Tab key={label.toString() + i} label={label} />
      ))}
    </Tabs>
  );
};

export default CustomTabs;
