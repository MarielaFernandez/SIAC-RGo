import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";

import Cursos from "./WizardSteps/Courses.js";
import Grupos from "./WizardSteps/Groups.js";

export default function WizardView() {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12}>
        <Wizard
          validate
          steps={[
            { stepName: "Cursos", stepComponent: Cursos, stepId: "Cursos" },
            { stepName: "Grupos", stepComponent: Grupos, stepId: "Grupos" },
            { stepName: "Horarios", stepComponent: Cursos, stepId: "Horarios" }
          ]}
          title="Administración"
          subtitle="This information will let us know more about you."
          finishButtonClick={e => alert(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
