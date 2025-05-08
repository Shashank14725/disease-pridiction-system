
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockData = [
  { day: "Mon", steps: 7500, calories: 2100, sleep: 7.2 },
  { day: "Tue", steps: 9200, calories: 2300, sleep: 6.8 },
  { day: "Wed", steps: 8400, calories: 2200, sleep: 7.5 },
  { day: "Thu", steps: 7900, calories: 2000, sleep: 8.1 },
  { day: "Fri", steps: 9800, calories: 2400, sleep: 7.7 },
  { day: "Sat", steps: 8700, calories: 2500, sleep: 8.5 },
  { day: "Sun", steps: 7200, calories: 2150, sleep: 9.0 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-4 md:p-6 bg-health-lightGray">
        <div className="container">
          <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Health Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">58,700</div>
                <p className="text-xs text-muted-foreground mt-1">+12% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Calories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,235</div>
                <p className="text-xs text-muted-foreground mt-1">-5% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Avg. Sleep</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7.8 hrs</div>
                <p className="text-xs text-muted-foreground mt-1">+0.5 hrs from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Activity Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">82/100</div>
                <p className="text-xs text-muted-foreground mt-1">+4 points from last week</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="steps" className="w-full">
            <TabsList>
              <TabsTrigger value="steps">Steps</TabsTrigger>
              <TabsTrigger value="calories">Calories</TabsTrigger>
              <TabsTrigger value="sleep">Sleep</TabsTrigger>
            </TabsList>
            <TabsContent value="steps" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Step Count</CardTitle>
                  <CardDescription>Your steps tracked over the past 7 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '0.5rem' }} />
                        <Line type="monotone" dataKey="steps" stroke="#4A90E2" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="calories" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Calorie Intake</CardTitle>
                  <CardDescription>Your daily calorie consumption for the past 7 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '0.5rem' }} />
                        <Line type="monotone" dataKey="calories" stroke="#50C878" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="sleep" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Sleep Duration</CardTitle>
                  <CardDescription>Your sleep duration for the past 7 days</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '0.5rem' }} />
                        <Line type="monotone" dataKey="sleep" stroke="#FF7E67" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
