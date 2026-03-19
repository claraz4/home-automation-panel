import SliderScreen from "../../../shared/components/slider-screen/SliderScreen";
import "../styles/policyInfoSlider.css";
import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import PageTitle from "../../../shared/components/page-title/PageTitle";
import LabelValueElement from "../../../shared/components/label-value-element/LabelValueElement";
import PlugsList from "../../../shared/components/plugs-list/PlugsList";
import { PolicyInfoDTO } from "../types/PolicyInfoDTO";
import Status from "../../../shared/components/status/Status";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  policyId: number | null;
}

export default function PolicyInfoSlider({ isOpen, onClose, policyId }: Props) {
  const [policy, setPolicy] = useState<PolicyInfoDTO | null>(null);
  let temperatureValue = "";

  if (policy) {
    const { tempGreaterThan, tempLessThan } = policy;

    if (tempGreaterThan && tempLessThan) {
      temperatureValue = `Between ${tempGreaterThan} and ${tempLessThan} °C`;
    } else if (tempLessThan) {
      temperatureValue = `< ${tempLessThan} °C`;
    } else if (tempGreaterThan) {
      temperatureValue = `> ${tempGreaterThan} °C`;
    }
  }

  const getPolicyInfo = async () => {
    try {
      const { data } = await api.get<PolicyInfoDTO>(`/policy/${policyId}`);
      setPolicy(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (policyId) {
      void getPolicyInfo();
    }
  }, [policyId]);

  if (!policy)
    return (
      <SliderScreen isOpen={isOpen} onClose={onClose}>
        <p>Loading</p>
      </SliderScreen>
    );

  return (
    <SliderScreen
      isOpen={isOpen}
      onClose={onClose}
      sliderClassContainer="policy-info-container"
    >
      <PageTitle
        title="Policy"
        rightComponent={<Status status={policy.isActive} />}
      />
      <div className="policy-info-subcontainer">
        <LabelValueElement label="Name" value={policy.name} />
        {policy.powerSourceId && (
          <LabelValueElement
            label="Power Source"
            value={policy.powerSourceName}
          />
        )}
        {(policy.tempGreaterThan || policy.tempLessThan) && (
          <LabelValueElement label="Temperature" value={temperatureValue} />
        )}
        <hr className="policy-info-hr" />
      </div>
      <PlugsList plugs={policy.onPlugs} plugState="ON" />
      <PlugsList plugs={policy.offPlugs} plugState="OFF" />
    </SliderScreen>
  );
}
