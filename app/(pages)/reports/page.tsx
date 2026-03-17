import React from 'react'
import PageHeader from "@/app/components/common/PageHeader";
import Tabs from "@/app/components/ui/Tabs";
import Button from "@/app/components/ui/Button";
import Select from "@/app/components/ui/Select";
import Steps from "@/app/components/reports/Steps";

import { Metadata } from 'next';
import Toggle from "@/app/components/ui/Toggle";

export const metadata: Metadata = {
    title: "Reports | seqxio",
    description: "Generate and export standardized operational reports.",
    openGraph: {
        title: "Reports | seqxio",
        description: "Generate and export standardized operational reports.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <div className="w-full flex-1">
            <PageHeader
                className="md:mb-4.5"
                heading="Reports"
                subheading="Generate and export standardized operational reports."
            >
                <Button className="tracking-minimal">Create report</Button>
            </PageHeader>

            <Tabs
                className="mb-4 [&>li]:rounded-sm [&>li>button]:py-1.5"
                tabs={[
                    { label: "Generate", value: "generate" },
                    { label: "History", value: "history" },
                ]}
            />

            <div className="p-4 md:p-6 space-y-6 bg-white rounded-lg border border-light-grey-300">
                <Steps
                    className="md:mb-7.5"
                    currentStep={1}
                    items={[
                        { label: "Basics" },
                        { label: "Sections" },
                        { label: "Review & Export" },
                    ]}
                />

                <div className="space-y-6">
                    <div className="md:mb-7.5 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="mb-3 block text-sm leading-100 font-medium">Report Type*</label>
                            <Select
                                options={[
                                    { label: "Select a report type", value: "" },
                                    { label: "Weekly Report", value: "weekly" },
                                    { label: "Monthly Report", value: "monthly" },
                                    { label: "Perfomance Summary", value: "perfomance" },
                                ]}
                            />
                            <p className="text-sm text-greenish">Choose a standardized layout or start custom.</p>
                        </div>
                        <div className="space-y-2">
                            <label className="mb-3 block text-sm leading-100 font-medium">Date Range*</label>
                            <Button className="tracking-minimal" variant="outline">
                                Select dates
                            </Button>
                        </div>
                    </div>

                    <div className="md:mb-7.5 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="mb-3 block text-sm leading-100 font-medium">Group By</label>
                            <Select
                                options={[
                                    { label: "None", value: "" },
                                    { label: "Zone", value: "zone" },
                                    { label: "Team", value: "team" },
                                    { label: "Project Type", value: "type" },
                                ]}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="mb-3 block text-sm leading-100 font-medium">Filters</label>
                            <div className="flex gap-2 flex-wrap">
                                <Select
                                    className="[&>*>*]:min-w-0"
                                    options={[
                                        { label: "All zones", value: "" },
                                    ]}
                                />
                                <Select
                                    options={[
                                        { label: "All teams", value: "" },
                                    ]}
                                />
                                <Select
                                    options={[
                                        { label: "All", value: "" },
                                        { label: "On Track", value: "On Track" },
                                        { label: "At Risk", value: "At Risk" },
                                        { label: "Delayed", value: "Delayed" },
                                        { label: "Critical", value: "Critical" },
                                        { label: "In Progress", value: "In Progress" },
                                        { label: "Completed", value: "Completed" },
                                    ]}
                                />
                                <Select
                                    options={[
                                        { label: "All types", value: "" },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-2">
                            <label className="mb-3 block text-sm leading-100 font-medium">Report Title*</label>
                            <input className="input w-full tracking-normal" type="text" placeholder="Weekly Operations Summary · Nov 18–Nov 25"/>
                        </div>
                    </div>
                    <Toggle id="branding" label="Include Branding" defaultChecked={true}/>
                    <p className="text-sm text-greenish">Adds logo and standardized styling to PDF exports.</p>
                </div>

                <div className="flex justify-end gap-2 mt-6">
                    <Button variant="outline" disabled>Back</Button>
                    <Button>Next</Button>
                </div>
            </div>
        </div>
    )
}

export default page