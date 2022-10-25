import { atom, useAtom } from "jotai";
import { useMemo } from "react";
import { createAtom, deleteAtom, filteredNameListAtom, nameAtom, selectedAtom } from "../src/components/atoms";
import Button from "test2/components/Button";

const NameField = () => {
    const [name, setName] = useAtom(nameAtom);
    return (
        <div>
            <span>이름</span>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

const Item = ({ itemAtom }) => {
    const [{ name }] = useAtom(itemAtom);
    const [selected, setSelected] = useAtom(
        useMemo(
            () =>
                atom(
                    (get) => get(selectedAtom) === itemAtom,
                    (_get, set) => set(selectedAtom, itemAtom)
                ),
            [itemAtom]
        )
    );

    return (
        <div
            style={{
                padding: "0.1em",
                backgroundColor: selected ? "lightgray" : "transparent"
            }}
            onClick={setSelected}
        >
            {name}
        </div>
    );
};

const List = () => {
    const [list] = useAtom(filteredNameListAtom);
    return (
        <div style={{ border: "1px solid black", width: "45%", height: "100px" }}>
            {list.map((item) => (
                <Item key={item} itemAtom={item} />
            ))}
        </div>
    )
}

function Jotai() {
    const [enabled, create] = useAtom(createAtom);
    const [,del] = useAtom(deleteAtom);
    

    return <>
        <h1>jotai test</h1>
        <div>
            <List />
        </div>
        <NameField />
        <Button disabled={!enabled} onClick={create}>추가</Button>
        <Button disabled={!enabled} onClick={del}>삭제</Button>
       
    </>
}

export default Jotai;