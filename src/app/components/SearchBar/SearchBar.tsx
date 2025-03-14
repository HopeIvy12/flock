"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/${encodeURIComponent(searchTerm)}`);
      setSearchTerm(''); // Clear the search input after search
    }
  };

  return (
    <input
      id="searchBar"
      className={styles.inputBox}
      type="text"
      placeholder="Search Hubs..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      }} // Press Enter to search
    />
  );
}
