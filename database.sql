CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

DROP TABLE "teams";

CREATE TABLE "my_teams" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80),
	"competitor_id" VARCHAR(80),
	"league_id" INT REFERENCES "leagues"
);

DROP TABLE "tournament";

CREATE TABLE "leagues" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(80),
	"tournament_id" VARCHAR(80)
);

INSERT INTO "leagues" ("name", "tournament_id")
VALUES ( 'Spanish La Liga', 'sr:tournament:8' ),
( 'English Premier League', 'sr:tournament:17' ),
( 'Italian Serie A', 'sr:tournament:23' ),
( 'French Ligue 1', 'sr:tournament:34' ),
( 'German Bundesliga', 'sr:tournament:35' ),
( 'Dutch Eredivisie', 'sr:tournament:37' ),
( 'Belgium First Division A', 'sr:tournament:38' ),
( 'Turkish Super Lig', 'sr:tournament:52' ),
( 'Greek Super League', 'sr:tournament:185' ),
( 'Russian Premier League', 'sr:tournament:203' ),
( 'Ukrainian Premier League', 'sr:tournament:218' ),
( 'Portuguese Premier League', 'sr:tournament:238' );

INSERT INTO "my_teams" ("name", "competitor_id", "league_id")
VALUES ( 'Manchester City', 'sr:competitor:17', '3' ),
( 'Manchester United', 'sr:competitor:35', '3' ),
( 'Chelsea FC', 'sr:competitor:38', '3' ),
( 'Wolverhampton Wanderers', 'sr:competitor:3', '3' ),
( 'Arsenal FC', 'sr:competitor:42', '3' );