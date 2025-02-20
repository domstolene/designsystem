import { Popover, PopoverGroup } from "../../packages/dds-components/src/index";
import { useState, useRef, useEffect } from "react";

export default {
  title: 'Playground/BerammingPopoverTesting'
}

export const BerammingPopoverTesting = () => {

  const [popoverOpen, setPopoverOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const onCalendarEventClick = () => {
    console.log('navigate to event');
  }

  const handleMouseEnter = () => {
    console.log('handle mouse enter');
    setPopoverOpen(true);
  }

  const handleMouseLeave = () => {
    console.log('handle mouse leave');
    setPopoverOpen(false);
  }

  useEffect(() => {
    console.log("element ref", ref);
  }, [ref]);

  return (
  <div style={{
      width: '100px',
      height: '200px',
      border: '1px solid'}}
  >
    <PopoverGroup isOpen={popoverOpen}>
      <div
        ref={ref}
        onClick={onCalendarEventClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{height: '100%', width: '100%'}}
      >Saks innhold</div>
      <Popover withCloseButton={false}>detaljert saks innhold</Popover>
    </PopoverGroup>
  </div>
  );
};
