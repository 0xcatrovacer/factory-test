import { R1Schema } from "../lib/schemas/r1-schema";
import FactoryComponentC from "./FactoryComponentC";

type R1Props = {
  schema: R1Schema;
};

const FactoryComponentR1: React.FC<R1Props> = ({schema}) => {
  return (
    <div style={{
        marginTop: "5rem",
    }}>
        FactoryComponentR1
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
        }}>
            {schema.config.c1 && schema.c1Schema &&
                <FactoryComponentC cItems={schema.c1Schema} />
            }
            {schema.config.c2 && schema.c2Schema &&
                <FactoryComponentC cItems={schema.c2Schema} />
            }
        </div>
    </div>
  )
}

export default FactoryComponentR1