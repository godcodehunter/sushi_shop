import { useState } from "react";

interface HeaderProps {
    style?: any, 
    init: string, 
    categories: string[], 
    onChange: (value: string)=>void,
}

export const Header = ({style, init, categories, onChange = ()=>{}}: HeaderProps) => {
    const [selected, setSelected] = useState<number>(0)

    return (
        <div style={{
            backgroundColor: "#17181C", 

            borderBottomStyle: "solid",
            borderBottomWidth: "1px", 
            borderBottomColor: "#5f6368", 
            
            display: "flex",
            flexDirection: "row",
            overflowY: "hidden",
            alignItems: "center",
            justifyContent: "center",
            
            padding: "12px",
            gap: "12px",
            ...style
        }}>
            {categories.map((item, index)=>{
                const isActive = index === selected
                return (
                    <div 
                        key={index} 
                        style={{
                            color: isActive ? "#17181C" : "rgba(255, 255, 255, 0.4)", 
                            
                            paddingLeft: "6px", 
                            paddingRight: "6px", 
                            paddingTop: "4px", 
                            paddingBottom: "4px",

                            borderRadius: "6px",
            
                            backgroundColor: isActive ? "#AAADB2" : undefined,
                            outline: isActive ? undefined : "1px solid rgba(255, 255, 255, 0.4)"
                        }} 
                        onClick={()=>{
                            onChange(categories[index])
                            setSelected(index)
                        }}>{item}
                    </div>
                )
            })}
        </div>
    );
};


