import React from 'react'
import { Card, CardContent } from './ui/card';
import { FileText } from 'lucide-react';

export default function StatCard({title,value,Icon,color}) {
  return (
    <Card className="bg-gray-800 border-gray-700 text-white">
      <CardContent className="p-6">
        <div className="flex justify-between items-center">
          <div>
                      <p className="text-sm text-gray-400">{ title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
          </div>
                  <div className={`bg-${color}-700/20 p-3 rounded-full`}>
                      <Icon className={`h-6 w-6 text-${color}-500`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
