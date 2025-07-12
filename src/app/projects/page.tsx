'use client';

import { useState, useMemo } from 'react';
import SectionWrapper from '@/components/shared/section-wrapper';
import ProjectCard from '@/components/shared/project-card';
import { PROJECTS_DATA } from '@/lib/constants';
import type { Project, ProjectCategory } from '@/lib/types';
import { ALL_CATEGORIES } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Filter, Search } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter(project => {
      const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
      const searchTermMatch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return categoryMatch && searchTermMatch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <SectionWrapper
      title="Our Services & Case Studies"
      subtitle="A collection of our work across our core service areas. Use the filters to explore specific categories."
    >
      <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-card rounded-lg shadow">
        <div className="relative w-full sm:w-auto sm:flex-grow max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-input border-border focus:border-accent"
            aria-label="Search services"
          />
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
           <Filter className="h-5 w-5 text-muted-foreground hidden sm:block" />
          <Select
            value={selectedCategory}
            onValueChange={(value: ProjectCategory | 'All') => setSelectedCategory(value)}
          >
            <SelectTrigger className="w-full sm:w-[200px] bg-input border-border focus:border-accent" aria-label="Filter by category">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-popover">
              <SelectItem value="All">All Services</SelectItem>
              {ALL_CATEGORIES.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground text-lg py-10">
          No projects found matching your criteria. Try adjusting your search or filters.
        </p>
      )}
    </SectionWrapper>
  );
}
