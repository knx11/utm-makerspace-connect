import { useState } from "react";
import Navigation from "@/components/Navigation";
import BookingModal from "@/components/BookingModal";
import printer3d from "@/assets/3d-printer.jpg";
import laserCutter from "@/assets/laser-cutter.jpg";
import cricutCutter from "@/assets/cricut-cutter.jpg";

const Booking = () => {
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);

  const machines = [
    {
      name: "3D PRINTER MACHINE",
      image: printer3d,
    },
    {
      name: "LASER CUTTING MACHINE",
      image: laserCutter,
    },
    {
      name: "CRICUT CUTTING MACHINE",
      image: cricutCutter,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto space-y-12 fade-in">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              BOOKING PAGE
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {machines.map((machine) => (
              <div
                key={machine.name}
                className="group cursor-pointer"
                onClick={() => setSelectedMachine(machine.name)}
              >
                <div className="bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[40px] p-1 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="bg-card rounded-[35px] p-6 h-full">
                    <div className="aspect-square rounded-3xl overflow-hidden mb-6">
                      <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="bg-white rounded-[25px] py-4 px-6 text-center shadow-md">
                      <h3 className="font-bold text-lg">{machine.name}</h3>
                    </div>
                    <button className="btn-makerspace w-full mt-6">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6 pt-8">
            <div className="bg-card rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold">Request a Workshop</h3>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Want to learn a new skill or need a custom workshop for your group? 
                  Let us know what you'd like to learn!
                </p>
                <button className="btn-makerspace mx-auto">
                  Submit Workshop Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {selectedMachine && (
        <BookingModal
          isOpen={!!selectedMachine}
          onClose={() => setSelectedMachine(null)}
          machineName={selectedMachine}
        />
      )}
    </div>
  );
};

export default Booking;
