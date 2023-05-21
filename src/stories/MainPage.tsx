import React, { useEffect, useState } from 'react';

import './page.css';
import { Card } from './Card';
import { Header } from './Header';
import { Item, data } from './catalog/data'

export const MainPage: React.FC = () => {
  const categories: string[] = data.map((item)=>item.category)

  const [category, setCategory] = useState<string>(categories[0])
  const [items, setItems] = useState<Item[]>()

  useEffect(()=>{
    const categoryDefinition = data.find((item)=>item.category === category)!
    setItems(categoryDefinition.items)
  }, [category])

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", backgroundColor: "#17181C"}}>
      <Header init={categories[0]} categories={categories} onChange={setCategory}/>
      <div className={"item-list"} style={{
        display: "flex",
        flexDirection: "column",
        //@ts-ignore
        overflowY: "overlay",

      }}>
        {items && items.map((item, index) => {
          return <Card {...{key: index, init: 0, onChange: ()=>{}, ...item}}/>
        })}
      </div>
    </div>
  );
};
