
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Truck, Package, Zap } from 'lucide-react';

const vehicles = [
  {
    id: 'mini-truck',
    name: 'Mini Truck',
    icon: Package,
    capacity: '1-2 Tons',
    description: 'Perfect for small deliveries and urban logistics',
    features: ['Local delivery', 'Quick turnaround', 'Cost-effective'],
    price: '₹8-12/km',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    borderColor: 'border-green-200'
  },
  {
    id: 'tempo',
    name: 'Tempo',
    icon: Truck,
    capacity: '2-4 Tons',
    description: 'Ideal for medium shipments and inter-city transport',
    features: ['Medium cargo', 'Reliable', 'Versatile'],
    price: '₹12-18/km',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200'
  },
  {
    id: 'truck',
    name: 'Large Truck',
    icon: Truck,
    capacity: '5-10 Tons',
    description: 'Best for bulk shipments and long-distance transport',
    features: ['Heavy cargo', 'Long distance', 'Bulk orders'],
    price: '₹18-25/km',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-200'
  }
];

const VehicleSelector = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {vehicles.map((vehicle) => {
        const Icon = vehicle.icon;
        const isSelected = selectedVehicle === vehicle.id;
        
        return (
          <Card 
            key={vehicle.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
              isSelected ? 'ring-2 ring-blue-500 shadow-lg' : ''
            } ${vehicle.bgColor} ${vehicle.borderColor} border-2`}
            onClick={() => setSelectedVehicle(vehicle.id)}
          >
            <CardHeader className="text-center">
              <div className={`mx-auto p-4 rounded-full bg-white shadow-sm mb-4 w-fit`}>
                <Icon className={`h-8 w-8 ${vehicle.iconColor}`} />
              </div>
              <CardTitle className="text-xl font-bold">{vehicle.name}</CardTitle>
              <CardDescription className="text-lg font-semibold text-gray-700">
                {vehicle.capacity}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">{vehicle.description}</p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {vehicle.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
              
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">{vehicle.price}</span>
                <span className="text-gray-500 text-sm ml-1">+ GST</span>
              </div>
              
              <Button 
                className={`w-full ${isSelected ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVehicle(vehicle.id);
                }}
              >
                {isSelected ? (
                  <><Zap className="h-4 w-4 mr-2" /> Selected</>
                ) : (
                  'Select Vehicle'
                )}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default VehicleSelector;
