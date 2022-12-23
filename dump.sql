--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-1ubuntu1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-1ubuntu1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "userId" integer NOT NULL,
    shortly text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    visualizations integer NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (8, 'https://www.instagram.com', 2, 'qtyrM', '2022-12-22 13:18:48.024253', 0);
INSERT INTO public.urls VALUES (11, 'https://www.google.com', 2, 'kyFrX', '2022-12-22 13:19:28.57764', 0);
INSERT INTO public.urls VALUES (5, 'https://www.google.com', 1, 'Z-qTk', '2022-12-22 13:17:47.773813', 1);
INSERT INTO public.urls VALUES (9, 'https://www.facebook.com', 2, 'BdnSa', '2022-12-22 13:19:14.469001', 3);
INSERT INTO public.urls VALUES (6, 'https://www.facebook.com', 1, 'VjXey', '2022-12-22 13:17:59.107849', 2);
INSERT INTO public.urls VALUES (12, 'https://www.google.com', 4, 'nG17C', '2022-12-22 15:33:23.425649', 0);
INSERT INTO public.urls VALUES (13, 'https://www.google.com', 3, 'ldkZ7', '2022-12-22 15:34:11.116224', 0);
INSERT INTO public.urls VALUES (14, 'https://www.facebook.com', 3, 'afZ10', '2022-12-22 15:34:19.826991', 0);
INSERT INTO public.urls VALUES (15, 'https://www.facebook.com', 4, 'jbEkI', '2022-12-22 15:36:33.799644', 0);
INSERT INTO public.urls VALUES (16, 'https://www.facebook.com', 4, 'XS_78', '2022-12-22 15:36:35.233449', 0);
INSERT INTO public.urls VALUES (17, 'https://www.facebook.com', 4, '9eamm', '2022-12-22 22:44:55.70964', 0);
INSERT INTO public.urls VALUES (10, 'https://www.linkdin.com', 2, 'ktCtP', '2022-12-22 13:19:21.638833', 5);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'João', 'joao@driven.com.br', '$2b$10$cOQRnYIU9IsvNUUHyzcr3Ok6bgt6uYytdWMmjuqXTBhbS/JKPb2s2', '2022-12-22 11:08:03.657566');
INSERT INTO public.users VALUES (2, 'tiago', 'ti@driven.com.br', '$2b$10$C3yskqgo5.ixHwrh5mfNz.ILUgMAttuIZKHygWVXirS91sQJUBkg6', '2022-12-22 13:17:23.271171');
INSERT INTO public.users VALUES (3, 'maria', 'ma@driven.com.br', '$2b$10$yZgojZxo3qaJFJ36hp8egOkh2YUMTiZaJ27P2slSkq7lC69KaoTS.', '2022-12-22 14:36:33.022069');
INSERT INTO public.users VALUES (4, 'paula', 'pl@driven.com.br', '$2b$10$TZ0FhT9qNWdkNOp2yGpI5uC2x36M.60wPWhjDpjsooOJMwxIaxLIG', '2022-12-22 14:36:50.410296');
INSERT INTO public.users VALUES (5, 'fdfdsfsd', 'jonas@driven.com', '$2b$10$uCLQf/rN.Y2WW7FT7QtbpOrmjKwUcO3LgWxDkJSb/5.QuEZeUKD6a', '2022-12-22 23:17:57.164964');
INSERT INTO public.users VALUES (6, 'jonas', 'jonas@teste.com', '$2b$10$47i8JNed3sPO5MTP/pxs3uZBX5ynLK2OY20qzHtLkqVFuUIOFrCKa', '2022-12-23 07:14:10.762752');
INSERT INTO public.users VALUES (7, 'jota', 'jota@gmail.com', '$2b$10$jFRx1ITZQGC/WaJz94Elj.5r3IC5qAWPDUSzUwuC8858QpaHr8fsu', '2022-12-23 14:51:15.724329');
INSERT INTO public.users VALUES (8, 'kiko', 'kiko@gmail.com', '$2b$10$c8vzcSUzGkuyk5t7lTMKD.Ch.Mk.9F1DfdPaleF.WgPSyrYImIiN2', '2022-12-23 15:42:56.569746');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 17, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 8, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortly_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_shortly_key UNIQUE (shortly);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

