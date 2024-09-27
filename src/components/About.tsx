"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col items-center justify-between">
      <div className="cursor-pointer relative h-[373px] w-[280px] shadow-[8px_8px_0_0_rgba(0,0,0,0.4)] rounded-2xl">
        <Image
          src={`/profile-potrait.jpg`}
          alt=""
          fill
          sizes="(min-width: 400px) 100vw"
          className="rounded-2xl"
        />
      </div>
      <section className="mt-4">
        <p>
          This is some extra content to ensure that the section is longer than
          the viewport height. Scroll down to see more content...
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          bibendum, libero id suscipit blandit, orci est cursus dui, vel
          dignissim erat dolor in nulla.
        </p>
        <p>
          Curabitur lacinia mi ac metus volutpat, a euismod lectus bibendum.
          Phasellus venenatis arcu at magna scelerisque, non venenatis mi
          posuere.
        </p>
        <p>
          Praesent non eros ac libero pharetra egestas. Vestibulum non tincidunt
          nunc. Nulla facilisi. Donec dictum magna ac augue fermentum, id
          scelerisque orci tincidunt.
        </p>
        <p>
          Donec vel diam nisl. Aliquam erat volutpat. Morbi volutpat consequat
          metus, vel varius nisi efficitur ut. Fusce fermentum interdum odio a
          feugiat.
        </p>
        <p>
          Integer ut lacus ac dolor dictum dictum. Aliquam erat volutpat. Sed
          aliquet, nisl ac tincidunt sodales, eros elit ultricies risus, eu
          tincidunt dui libero at velit.
        </p>
        <p>
          Quisque vitae libero sed purus tincidunt venenatis. Sed sed urna sit
          amet elit tempor ultricies. Nullam vel felis nec justo varius laoreet.
        </p>
        <p>
          Proin suscipit, nisl non euismod aliquet, massa est facilisis massa,
          ut consequat nunc neque non elit.
        </p>
      </section>
      <div>
        <p>
          This is some extra content to ensure that the section is longer than
          the viewport height. Scroll down to see more content...
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          bibendum, libero id suscipit blandit, orci est cursus dui, vel
          dignissim erat dolor in nulla.
        </p>
        <p>
          Curabitur lacinia mi ac metus volutpat, a euismod lectus bibendum.
          Phasellus venenatis arcu at magna scelerisque, non venenatis mi
          posuere.
        </p>
        <p>
          Praesent non eros ac libero pharetra egestas. Vestibulum non tincidunt
          nunc. Nulla facilisi. Donec dictum magna ac augue fermentum, id
          scelerisque orci tincidunt.
        </p>
        <p>
          Donec vel diam nisl. Aliquam erat volutpat. Morbi volutpat consequat
          metus, vel varius nisi efficitur ut. Fusce fermentum interdum odio a
          feugiat.
        </p>
        <p>
          Integer ut lacus ac dolor dictum dictum. Aliquam erat volutpat. Sed
          aliquet, nisl ac tincidunt sodales, eros elit ultricies risus, eu
          tincidunt dui libero at velit.
        </p>
        <p>
          Quisque vitae libero sed purus tincidunt venenatis. Sed sed urna sit
          amet elit tempor ultricies. Nullam vel felis nec justo varius laoreet.
        </p>
        <p>
          Proin suscipit, nisl non euismod aliquet, massa est facilisis massa,
          ut consequat nunc neque non elit.
        </p>
      </div>
      <div>
        <p>
          This is some extra content to ensure that the section is longer than
          the viewport height. Scroll down to see more content...
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          bibendum, libero id suscipit blandit, orci est cursus dui, vel
          dignissim erat dolor in nulla.
        </p>
        <p>
          Curabitur lacinia mi ac metus volutpat, a euismod lectus bibendum.
          Phasellus venenatis arcu at magna scelerisque, non venenatis mi
          posuere.
        </p>
        <p>
          Praesent non eros ac libero pharetra egestas. Vestibulum non tincidunt
          nunc. Nulla facilisi. Donec dictum magna ac augue fermentum, id
          scelerisque orci tincidunt.
        </p>
        <p>
          Donec vel diam nisl. Aliquam erat volutpat. Morbi volutpat consequat
          metus, vel varius nisi efficitur ut. Fusce fermentum interdum odio a
          feugiat.
        </p>
        <p>
          Integer ut lacus ac dolor dictum dictum. Aliquam erat volutpat. Sed
          aliquet, nisl ac tincidunt sodales, eros elit ultricies risus, eu
          tincidunt dui libero at velit.
        </p>
        <p>
          Quisque vitae libero sed purus tincidunt venenatis. Sed sed urna sit
          amet elit tempor ultricies. Nullam vel felis nec justo varius laoreet.
        </p>
        <p>
          Proin suscipit, nisl non euismod aliquet, massa est facilisis massa,
          ut consequat nunc neque non elit.
        </p>
      </div>
    </section>
  );
}
