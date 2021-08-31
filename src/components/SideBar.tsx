import { Button } from "./Button";

export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface Props {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => any;
  idGenre: number;
}

export function SideBar({ genres, handleClickButton, idGenre }: Props) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={idGenre === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
