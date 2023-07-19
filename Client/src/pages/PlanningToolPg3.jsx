//hooks
import { texts } from "../hooks/texts"

// styles
import "../styles/PlanningToolPg3.css"

function PickAddOns({ data, updateFielHandler }) {
    const { services } = texts()

    return (
        <div className="form-container new-gap">
            <div className={`input input-flex${data.services.service01.isChecked == true ? " clicked-style" : ""}`}>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        name="online service"
                        id="onService"
                        onChange={e => updateFielHandler("services", {...data.services, service01: {...data.services.service01, isChecked: e.target.checked}})}
                        checked={data.services.service01.isChecked}
                    />

                    <span className="checkmark"></span>
                </div>

                <div className="service-informations">
                    <div className="service-type">
                        <label htmlFor="onService">Online service</label>
                        <span>Acess to multiplayer games</span>
                    </div>

                    <div className="service-value">
                        <span>
                            {data.typePlan == "Monthly" ? `+$${services.monthly[0]}/mo` : `+$${services.yearly[0]}/yr`}
                        </span>
                    </div>
                </div>
            </div>

            <div className={`input input-flex${data.services.service02.isChecked == true ? " clicked-style" : ""}`}>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        name="larger storage"
                        id="larStorage"
                        onChange={e => updateFielHandler("services", {...data.services, service02: {...data.services.service02, isChecked: e.target.checked}})}
                        checked={data.services.service02.isChecked}
                    />

                    <span className="checkmark"></span>
                </div>

                <div className="service-informations">
                    <div className="service-type">
                        <label htmlFor="larStorage">Larger storage</label>
                        <span>Extra 1TB of cloud save</span>
                    </div>

                    <div className="service-value">
                        <span>
                            {data.typePlan == "Monthly" ? `+$${services.monthly[1]}/mo` : `+$${services.yearly[1]}/yr`}
                        </span>

                    </div>
                </div>
            </div>

            <div className={`input input-flex${data.services.service03.isChecked == true ? " clicked-style" : ""}`}>
                <div className="input-checkbox">
                    <input
                        type="checkbox"
                        name="customizable profile"
                        id="customProfile"
                        onChange={e => updateFielHandler("services", {...data.services, service03: {...data.services.service03, isChecked: e.target.checked}})}
                        checked={data.services.service03.isChecked}
                    />

                    <span className="checkmark"></span>
                </div>

                <div className="service-informations">
                    <div className="service-type">
                        <label htmlFor="customProfile">Customizable profile</label>
                        <span>Custom theme on your profile</span>
                    </div>

                    <div className="service-value">
                        <span>
                            {data.typePlan == "Monthly" ? `+$${services.monthly[2]}/mo` : `+$${services.yearly[2]}/yr`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickAddOns