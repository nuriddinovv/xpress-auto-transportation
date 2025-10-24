import { Accordion } from "@mantine/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function AccordionComponent({ value, description }: { value: string, description: string }) {

  return (
    <Accordion
      chevron={<FontAwesomeIcon icon={faPlus} />}
    >
      <Accordion.Item key={value} value={value}>
        <Accordion.Control className="text-center justify-center, flex m-auto">
          {value}
        </Accordion.Control>
        <Accordion.Panel className='text-black'>
          {description}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
