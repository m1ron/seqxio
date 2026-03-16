import React from 'react'
import PageHeader from "@/app/components/common/PageHeader";
import Button from "@/app/components/ui/Button";
import QuickHelp from "@/app/components/help/QuickHelp";
import Troubleshooting from "@/app/components/help/Troubleshooting";
import Faq from "@/app/components/help/Faq";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Help | seqxio",
    description: "Find answers, learn key workflows, or contact support.",
    openGraph: {
        title: "Help | seqxio",
        description: "Find answers, learn key workflows, or contact support.",
        images: "/dashboard-meta-img",
    },
};

const page = () => {
    return (
        <>
            <PageHeader
                className="xl:mb-8.5"
                heading="Help"
                subheading="Find answers, learn key workflows, or contact support."
            >
                <Button variant="outline">Give feedback</Button>
            </PageHeader>

            <div className="max-w-4xl mx-auto space-y-12">
                <section className="space-y-4">
                    <h3 className="mb-4 text-2xl leading-8 font-semibold tracking-mid text-midnight-blue">
                        Quick Help
                    </h3>
                    <div className="max-md:space-y-4 md:grid md:grid-cols-2 md:gap-4">
                        <QuickHelp items={[
                            {
                                title: "Monitor today’s work",
                                description: "View active projects, crews, and locations in real time.",
                                href: "/",
                                linkLabel: "Go to Dashboard",
                                icon: "quickHelpDashboard",
                            },
                            {
                                title: "Manage projects",
                                description: "View project status, add notes, upload photos, and resolve issues.",
                                href: "/projects",
                                linkLabel: "Go to Projects",
                                icon: "quickHelpProjects",
                            },
                            {
                                title: "Coordinate schedules",
                                description: "View scheduled work and add operational notes by date.",
                                href: "/calendar",
                                linkLabel: "Go to Calendar",
                                icon: "quickHelpCalendar",
                            },
                        ]}/>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="mb-4 text-2xl leading-8 font-semibold tracking-mid text-midnight-blue">
                        Guided How-To’s
                    </h3>
                    <Faq items={[
                        {
                            question: "How to create and manage a project",
                            answer: (
                                <ol className="list-decimal list-inside">
                                    <li>Go to Projects</li>
                                    <li>Click Add Project</li>
                                    <li>Assign a team</li>
                                    <li>Monitor status and add notes/photos as needed</li>
                                </ol>
                            ),
                        },
                        {
                            question: "How to assign a project to a team",
                            answer: (
                                <ol className="list-decimal list-inside">
                                    <li>Open Teams</li>
                                    <li>Select a team</li>
                                    <li>Click Assign Project</li>
                                    <li>Choose project and confirm</li>
                                </ol>
                            ),
                        },
                        {
                            question: "How to add an operational note",
                            answer: (
                                <ol className="list-decimal list-inside">
                                    <li>Click Add Note from Dashboard, Calendar, Project, or Team</li>
                                    <li>Select project and team</li>
                                    <li>Add details and save</li>
                                </ol>
                            ),
                        },
                        {
                            question: "How to handle issues",
                            answer: (
                                <ol className="list-decimal list-inside">
                                    <li>Identify flagged projects, teams, or roads</li>
                                    <li>Open details sheet</li>
                                    <li>Review notes/photos</li>
                                    <li>Mark issue resolved when complete</li>
                                </ol>
                            ),
                        },
                        {
                            question: "How to track crews in real time",
                            answer: (
                                <ol className="list-decimal list-inside">
                                    <li>Open Dashboard</li>
                                    <li>Use the map to view active teams</li>
                                    <li>Click a team or road for details</li>
                                </ol>
                            ),
                        },
                    ]}/>
                </section>

                <section className="space-y-4">
                    <h3 className="mb-4 text-2xl leading-8 font-semibold tracking-mid text-midnight-blue">
                        FAQ
                    </h3>
                    <Faq items={[
                        {
                            question: "Why can’t I see a team’s live location?",
                            answer: (
                                <p>Location may be unavailable if the team is off duty or hasn’t checked in recently.</p>
                            ),
                        },
                        {
                            question: "What does ‘Needs Attention’ mean?",
                            answer: (
                                <p>It indicates delays, open issues, or missing information.</p>
                            ),
                        },
                        {
                            question: "Who can see notes I add?",
                            answer: (
                                <p>Visibility depends on the note’s visibility setting (team-only, admins, or everyone).</p>
                            ),
                        },
                        {
                            question: "How are issues created?",
                            answer: (
                                <p>Issues can be flagged from photos, notes, or system rules.</p>
                            ),
                        },
                    ]}/>
                </section>

                <section className="space-y-4">
                    <h3 className="mb-4 text-2xl leading-8 font-semibold tracking-mid text-midnight-blue">
                        Troubleshooting
                    </h3>
                    <div className="space-y-4">
                        <Troubleshooting items={[
                            {
                                title: "Data not updating?",
                                description: "Try refreshing the page or checking your filters.",
                                icon: "troubleshootingUpdating",
                            },
                            {
                                title: "Map not loading?",
                                description: "Check your internet connection and map settings.",
                                icon: "troubleshootingNotLoading",
                            },
                            {
                                title: "Can’t perform an action?",
                                description: "You may not have permission for that action.",
                                icon: "troubleshootingNotPerform",
                            },
                            {
                                title: "Seeing outdated information?",
                                description: "Confirm your date range and filters.",
                                icon: "troubleshootingTime",
                            },
                        ]}/>
                    </div>
                </section>

                <section className="space-y-4">
                    <h3 className="mb-4 text-2xl leading-8 font-semibold tracking-mid text-midnight-blue">
                        Contact &amp; Support
                    </h3>
                    <div className="px-6 py-6.5 space-y-4.5 rounded-lg bg-white border border-light-grey-300">
                        <p className="text-charcoal-grey text-base leading-5 tracking-min">Still need help? Our support team is here to assist you.</p>
                        <div className="flex gap-4 sm:gap-2 md:gap-4 sm:items-center max-sm:flex-col sm:-mb-0.5">
                            <Button className="tracking-minimal">Contact support</Button>
                            <Button className="tracking-minimal" variant="outline">Report a bug</Button>
                            <Button className="tracking-minimal" variant="outline">Request a feature</Button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default page
