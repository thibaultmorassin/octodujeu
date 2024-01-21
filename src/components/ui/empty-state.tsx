import Image from "next/image";
import emptyImage from "../../assets/crashed-error.svg";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { PropsWithChildren } from "react";

const EmptyState: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-md">
      <Image
        src={emptyImage}
        width="960"
        height="960"
        alt="On a rien trouvé !"
      />
      <Alert>
        <AlertTitle className="text-xl font-bold">Oups ! </AlertTitle>
        <AlertDescription>
          <p>
            {
              "Qu'est-ce qu'il se passe dans l'espace ? On a rien trouvé par ici !"
            }
          </p>
          {children}
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default EmptyState;
