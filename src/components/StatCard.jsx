import React from 'react'
import { Card, CardContent } from './ui/card';

export default function StatCard({title,value,Icon,textColor,bgColor}) {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
          <div className={`p-3 rounded-full ${bgColor}`}>
            <Icon className={`h-6 w-6 ${textColor}`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
