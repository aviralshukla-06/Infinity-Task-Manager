import { CalanderIcon } from "../icons/CalanderIcon"
import { CheckIcon } from "../icons/CheckIcon"
import { DashboardIcon } from "../icons/DashboardIcon"
import { DueTaskIcon } from "../icons/DueTaskIcon"
import { LogoutIcon } from "../icons/LogoutIcon"
import { PendingIcon } from "../icons/PendingIcon"
import { Button } from "./Button"

export const SideBar = () => {
    return (
        <div className="h-screen w-[18%] mt-2 shadow-lg bg-[#ff6867] rounded-md">
            <div className=" h-[80%]">
                <div className="flex p-4">
                    <Button
                        icon={<DashboardIcon size="lg" />}
                        text="Home"
                    />
                    {/* <DashboardIcon size="md" /> */}
                </div>
                <div className="flex p-4">
                    <Button
                        icon={<CheckIcon size="lg" />}
                        text="Finished"
                    />
                    {/* <DashboardIcon size="md" /> */}
                </div>
                <div className="flex p-4">
                    <Button
                        icon={<PendingIcon size="lg" />}
                        text="Upcoming"
                    />
                    {/* <DashboardIcon size="md" /> */}
                </div>
                <div className="flex p-4">
                    <Button
                        icon={<DueTaskIcon size="lg" />}
                        text="Missed"
                    />
                    {/* <DashboardIcon size="md" /> */}
                </div>
                <div className="flex p-4">
                    <Button
                        icon={<CalanderIcon size="lg" />}
                        text="Today's Task"
                    />
                    {/* <DashboardIcon size="md" /> */}
                </div>

            </div>
            <div className="flex p-4">
                <Button
                    icon={<LogoutIcon size="lg" />}
                    text="Logout"
                />
            </div>
        </div>
    )
}