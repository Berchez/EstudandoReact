import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'GridTwoColumns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut, libero
          harum, incidunt delectus explicabo similique consectetur maxime quibusdam
          praesentium ut. Cum, maiores? Debitis tempora rerum explicabo vero.
          Repellendus, natus?`,
    srcImg:
      'https://www.vgeducacional.com/images/undraw_static_assets_rpm6.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
