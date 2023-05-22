import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { useState } from 'react';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardWithHooks = () => {
    const [value, setValue] = useState(0)

    return (
        <Card 
            init={0}
            onChange={(va: number)=>{}}
            img={"test"}
            name={"Name"} 
            composition={["rice", "fish"]}
            weight={123} 
            price={20}
        />
    )
}

export const Primary = {
    render: () => <CardWithHooks/>,
}


