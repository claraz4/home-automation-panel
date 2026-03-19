import PageTitle from "../../shared/components/page-title/PageTitle";
import { useEffect, useState } from "react";
import { PoliciesDTO, PolicyDTO } from "./types/PoliciesDTO";
import { api } from "../../api/api";
import ElementBox from "../../shared/components/element-box/ElementBox";
import Conditions from "./components/Conditions";
import "./styles/policies.css";
import PolicyInfoSlider from "./components/PolicyInfoSlider";

export default function Policies() {
  const [policies, setPolicies] = useState<PolicyDTO[]>([]);
  const [showPoliyInfo, setShowPolicyInfo] = useState(false);
  const [clickedPolicyId, setClickedPolicyId] = useState<number | null>(null);

  const getPolicies = async () => {
    try {
      const { data } = await api.get<PoliciesDTO>("/policy");
      setPolicies(data.policies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    void getPolicies();
  }, []);

  const handleClick = (policyId: number) => {
    setClickedPolicyId(policyId);
    setShowPolicyInfo(true);
  };

  return (
    <div className="navbar-page policy-page">
      <PageTitle title="Automation" />
      <div className="policies-container">
        {policies.length > 0 &&
          policies.map((policy) => (
            <ElementBox
              title={policy.name}
              key={policy.id}
              hasStatus={true}
              status={policy.isActive ? "ON" : "OFF"}
              invert={true}
              infoContainerClass="policy-element-box-info-container"
              subComponent={
                <Conditions
                  plugs={policy.numOfPlugs}
                  tempGreaterThan={policy.tempGreaterThan}
                  tempLessThan={policy.tempLessThan}
                  source={policy.powerSourceName}
                />
              }
              onClick={() => handleClick(policy.id)}
            />
          ))}
      </div>
      <PolicyInfoSlider
        isOpen={showPoliyInfo}
        onClose={() => setShowPolicyInfo(false)}
        policyId={clickedPolicyId}
      />
    </div>
  );
}
