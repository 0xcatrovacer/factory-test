import { CSchema } from "../lib/schemas/r1-schema";

type CProps = {
  cItems: CSchema[];
};

const FactoryComponentC: React.FC<CProps> = ({cItems}) => {
  return (
    <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "50%"
    }}>
        {cItems.map((cItem) => (
            <div 
                key={cItem.id}
                style={{
                    height: "4.688rem",
                    width: "9.375rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    textAlign: "start",
                    padding: "0.438rem 1.125rem 0.438rem 1.125rem",
                    background: cItem.bgOverRide || cItem.bgDefault,
                    color: cItem.textOverRide || cItem.textDefault,
                    borderRadius: "5px"
                }}
            >
                <div>
                    {cItem.title}
                </div>
                <div>
                    {cItem.content}
                </div>
            </div>
        ))}
    </div>
  )
}

export default FactoryComponentC