import { IconPlus } from "@tabler/icons-react";
import { Accordion } from "@mantine/core";
import { accordionData } from "./data";
import classes from "./accordion.module.css";

export const AccordionComponent = () => {
  return (
    <>
      <Accordion
        multiple={false}
        classNames={{
          root: classes.accordionRoot,
          item: classes.item,
          control: classes.control,
          label: classes.label,
          panel: classes.panel,
          chevron: classes.chevron,
        }}
        chevron={<IconPlus className={classes.icon} stroke={1.5} />}
        transitionDuration={150}
      >
        {accordionData.map((item) => (
          <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control>{item.value}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};
