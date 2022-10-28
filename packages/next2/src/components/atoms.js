import {atom} from "jotai";

export const nameAtom = atom("");
export const surnameAtom = atom("");

const nameListAtom = atom([]);
const baseSeletedAtom = atom(null);

export const prefixAtom = atom("");

export const filteredNameListAtom = atom((get) => {
  const prefix = get(prefixAtom);
  const nameList = get(nameListAtom);
 
  if (!prefix) {
    return nameList;
  }
  return nameList.filter((nameItemAtom) =>
    get(nameItemAtom).surname.startsWith(prefix)
  );
});

export const selectedAtom = atom(
    (get) => get(baseSeletedAtom),
    (get,set,nameItemAtom) => {
        set(baseSeletedAtom,nameItemAtom);
        if(nameItemAtom){
            const {name} = get(nameItemAtom);
            set(nameAtom,name);
        }
    }
)

export const createAtom = atom(
    (get) => !!get(nameAtom),
    (get, set) => {
      const name = get(nameAtom);
 
      if (name) {
        const nameItemAtom = atom({ name });
        set(nameListAtom, (prev) => [...prev, nameItemAtom]);
        set(nameAtom, ""); 

      }
    }
  );

  export const deleteAtom = atom (
    (get) => !!get(selectedAtom),
    (get,set) => {
        const selected = get(selectedAtom);
        if(selected){
            set(nameListAtom,(prev) => prev.filter((item) => item !== selected));
            set(nameAtom,"")
        }
    }
  )

  export const dataAtom = atom([]);