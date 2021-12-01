-- On démarre une transaction afin de s'assurer de la cohérence globale de la BDD --
BEGIN;

-- On supprime l'existant, si elle existe
DROP TABLE IF EXISTS "author", "article", "category", "article_has_category";

-- On crée la table author
CREATE TABLE "author" (
    -- Un id avec SERIAL qui est un pseudo-type de PostgresSQL
    -- "id" SERIAL PRIMARY KEY,
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "mail" TEXT NOT NULL DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- On crée la table article
CREATE TABLE "article" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL DEFAULT '',
    "image" TEXT NOT NULL DEFAULT '',
    "author_id" INTEGER NOT NULL REFERENCES "author"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ
);

-- On crée la table category
CREATE TABLE "category" (
    "id" INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "color" TEXT NOT NULL DEFAULT '#FFF'
);

CREATE TABLE "article_has_category" (
    "article_id" INTEGER NOT NULL REFERENCES article("id") ON DELETE CASCADE,
    "category_id" INTEGER NOT NULL REFERENCES category("id") ON DELETE CASCADE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
    -- ici pas besoin de updated_at : une relation ne se met pas à jour, soit on l'ajoute, soit on la supprime
);

-- Une fois les tables crées, on va les remplir

INSERT INTO "author"("name", "mail", "password", "description", "image")
VALUES ('Math', 'math@gmail.com', 'boo', 'Premier utilisateur', 'math');

INSERT INTO "article"("title", "content", "image", "author_id")
VALUES ('Article 1', 'Cillum nostrud dolor voluptate eiusmod et exercitation Lorem cupidatat non tempor. Cillum sint nulla aute exercitation do veniam ea dolor Lorem consectetur adipisicing laboris. Consequat elit quis amet culpa. Mollit fugiat est magna quis laboris sint eiusmod duis.', 'article1', 1);

INSERT INTO "category"("name", "color")
VALUES ('Faits divers', '#808080');

-- a ne pas oublier ... la liaison !
INSERT INTO "article_has_category" ("article_id", "category_id")
VALUES (1,1);

COMMIT;