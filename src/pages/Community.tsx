import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users, Plus } from "lucide-react";
import CreateGroupModal from "@/components/CreateGroupModal";
import { toast } from "sonner";

const Community = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const communities = [
    {
      name: "3D Print & Chill",
      description: "Casual 3D printing sessions for beginners and experts alike. Bring your projects!",
      meetingTime: "Wednesdays 4 PM",
      members: 12,
    },
    {
      name: "Laser Lab Learners",
      description: "Explore laser cutting and engraving. Perfect for crafters and designers.",
      meetingTime: "Fridays 2 PM",
      members: 8,
    },
    {
      name: "Design for Change",
      description: "Create solutions for real-world problems. Open to all disciplines.",
      meetingTime: "Biweekly Mondays 3 PM",
      members: 15,
    },
    {
      name: "Robotics & Electronics",
      description: "Build robots, circuits, and IoT projects together.",
      meetingTime: "Tuesdays 5 PM",
      members: 10,
    },
  ];

  const filteredCommunities = communities.filter((community) =>
    community.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    community.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleJoinGroup = (name: string) => {
    toast.success(`You've joined ${name}!`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-6xl mx-auto space-y-12 fade-in">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              FIND OR CREATE<br />YOUR COMMUNITY
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Meet students who share your interests — or start your own group.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search groups (e.g. robotics, film, 3D art, coding)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="py-6 text-base rounded-3xl bg-card/80 border-none shadow-sm"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredCommunities.map((community) => (
              <div
                key={community.name}
                className="bg-card rounded-3xl p-8 shadow-md"
              >
                <h3 className="text-2xl font-bold mb-1">{community.name}</h3>
                <p className="text-base font-semibold text-foreground mb-4">{community.meetingTime}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {community.description}
                </p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => handleJoinGroup(community.name)}
                    variant="outline"
                    className="flex-1 rounded-full border-2 border-foreground bg-card hover:bg-foreground/5 font-semibold"
                  >
                    Join Group
                  </Button>
                  <Button
                    className="flex-1 rounded-full border-2 border-primary bg-card hover:bg-primary/5 text-foreground font-semibold"
                    variant="outline"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-3xl p-12 text-center shadow-xl max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Create Your Own Group</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Don't see what you're looking for? Start your own community!
            </p>
            <Button
              onClick={() => setIsCreateModalOpen(true)}
              className="btn-makerspace text-xl px-12 py-6"
            >
              <Plus className="w-6 h-6 mr-2" />
              Create New Group
            </Button>
          </div>

          <div className="text-center pt-8">
            <p className="text-lg text-muted-foreground italic">
              Everyone starts somewhere. Start your group — and help others belong too.
            </p>
          </div>
        </div>
      </main>

      <CreateGroupModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </div>
  );
};

export default Community;
