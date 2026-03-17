import React from "react";

import PageHeader from "@/app/components/common/PageHeader";
import Icons from "@/app/components/common/Icons";
import Button from "@/app/components/ui/Button";
import Tabs from "@/app/components/ui/Tabs";
import Select from "@/app/components/ui/Select";

type CalendarProps = {
    heading: string;
    subheading?: string;
};

export default function Calendar({ heading, subheading }: CalendarProps) {
    return (
        <div className="w-full flex-1">

            {/* PageHeader */}
            <PageHeader
                className="md:mb-9.25 gap-4 lg:gap-6 max-sm:[&>div]:flex-col max-sm:[&>div]:w-full max-sm:[&>div]:gap-4"
                heading={heading}
                subheading={subheading}
            >
                <div className="max-md:mr-2 xl:mr-2 flex gap-2 self-start">
                    <Button>Add note</Button>
                    <Button variant="outline">Today</Button>
                </div>

                <Tabs
                    className="p-0 bg-transparent self-start [&>.shadow-sm]:shadow-none [&>.bg-white]:bg-cool-mist"
                    tabs={[
                        { label: "Month", value: "month" },
                        { label: "Week", value: "week" },
                        { label: "Day", value: "day" },
                    ]}
                />
            </PageHeader>

            <div className="mb-8 flex max-xxl:flex-col gap-4 xxl:gap-8.5 xxl:items-end">
                <div className="flex max-sm:flex-col sm:justify-between gap-4 xxl:gap-8.5">
                    <h2 className="text-black text-xl md:text-2xl leading-10 font-bold tracking-mid">
                        February 2026
                    </h2>

                    <div className="flex gap-2 max-sm:justify-between">
                        <Button variant="outline" className="flex gap-2 items-center tracking-minimal">
                            <Icons icon="arrowPrev" />
                            Previous
                        </Button>

                        <Button variant="outline" className="flex gap-2 items-center tracking-minimal">
                            Next
                            <Icons icon="arrowNext" />
                        </Button>
                    </div>
                </div>
                <div className="xxl:ml-auto flex max-sm:flex-col gap-3 xxl:gap-4">
                    <Select
                        className="min-w-40 xl:min-w-45 max-xxl:flex-1 md:space-y-px"
                        label="Zone"
                        defaultValue="all-zones"
                        options={[
                            { label: "All zones", value: "all-zones" },
                            { label: "Zone A", value: "zone-a" },
                            { label: "Zone B", value: "zone-b" },
                            { label: "Zone C", value: "zone-c" },
                        ]}
                    />
                    <Select
                        className="min-w-40 xl:min-w-45 max-xxl:flex-1 md:space-y-px"
                        label="Team"
                        defaultValue="all-teams"
                        options={[
                            { label: "All teams", value: "all-teams" },
                            { label: "Crew A", value: "crew-a" },
                            { label: "Crew B", value: "crew-b" },
                            { label: "Crew C", value: "crew-c" },
                        ]}
                    />
                    <Select
                        className="min-w-40 xl:min-w-45 max-xxl:flex-1 md:space-y-px"
                        label="Status"
                        defaultValue="all"
                        options={[
                            { label: "All", value: "all" },
                            { label: "On Track", value: "on-track" },
                            { label: "At Risk", value: "at-risk" },
                            { label: "Completed", value: "completed" },
                            { label: "Critical", value: "critical" },
                            { label: "In Progress", value: "in-progress" },
                        ]}
                    />
                </div>
            </div>

            <div className="w-full bg-white rounded-md">
                <div className="w-full py-2 xl:mb-2 flex text-[11px] md:text-xs leading-normal font-bold uppercase text-greenish tracking-minimal text-center cursor-default [&>div]:w-1/7 [&>div]:p-1.5">
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                    <div>Sun</div>
                </div>
                <div className="flex flex-wrap
                    text-midnight-blue text-xs md:text-[13.3px] leading-4.5
                    border-r border-r-light-grey-200 border-b border-b-light-grey-200 rounded-bl-md rounded-br-md
                    [&>button]:w-1/7 [&>button]:aspect-square sm:[&>button]:aspect-173/120 [&>button]:p-1.5 md:[&>button]:p-2 [&>button]:flex [&>button]:text-left [&>button]:cursor-pointer [&>button]:outline-none
                    [&>button]:hover:bg-light-grey-200/25 [&>button]:focus:bg-light-grey-200/25
                    [&>button]:border-t [&>button]:border-l [&>button]:border-t-light-grey-200 [&>button]:border-l-light-grey-200">
                    <button className="text-light-grey-600">23</button>
                    <button className="text-light-grey-600">24</button>
                    <button className="text-light-grey-600">25</button>
                    <button className="text-light-grey-600">26</button>
                    <button className="text-light-grey-600">27</button>
                    <button className="text-light-grey-600">28</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>10</button>
                    <button>11</button>
                    <button>12</button>
                    <button>13</button>
                    <button>14</button>
                    <button>15</button>
                    <button>16</button>
                    <button>17</button>
                    <button>18</button>
                    <button>19</button>
                    <button>20</button>
                    <button>21</button>
                    <button>22</button>
                    <button>23</button>
                    <button>24</button>
                    <button>25</button>
                    <button>26</button>
                    <button>27</button>
                    <button>28</button>
                    <button>29</button>
                    <button>30</button>
                    <button>31</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                </div>
            </div>
        </div>
    );
}